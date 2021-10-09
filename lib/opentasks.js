'use babel';

import { CompositeDisposable } from 'event-kit'

class OpenTasksPlugin {
  subscriptions = new CompositeDisposable()

  subscription = inkdrop.commands.add(document.body, {
    'opentasks:toggle': async () => 
    {
      const db = inkdrop.main.dataStore.getLocalDB()
      const result = await db.notes.all({limit: 20000})
      const { docs } = result
      docs.filter(d => d.numOfTasks > d.numOfCheckedTasks).forEach(element => {
        this.UpdateStatus(element, db);
      });
    }
  });
  
  activate() {
    const db = inkdrop.main.dataStore.getLocalDB()

    const noteChangeHandler = (updatedNote) => {
      this.UpdateStatus(updatedNote.doc, db);
    };
    db.onNoteChange(noteChangeHandler);
  }

  UpdateStatus(doc, db) {
    // Manual status set, do nothing automagically
    if (doc.status === 'onHold' || doc.status === 'dropped') return;

    // Status none if there's no tasks
    if (doc.numOfTasks === 0 && doc.status != 'none') {
      doc.status = "none";
      db.notes.put(doc);
    } else {
      // If there's some tasks to be done in the note, mark it as active
      if (doc.numOfTasks > doc.numOfCheckedTasks && doc.status != 'active') {
        doc.status = "active";
        db.notes.put(doc);

        // Otherwise, if there's no more task to do, mark note as completed
      } else if (doc.numOfTasks > 0 && doc.numOfTasks == doc.numOfCheckedTasks && doc.status != 'completed') {
        doc.status = "completed";
        db.notes.put(doc);
      }
    }
  }

  deactivate() {
    subscription.dispose();
  }

};

module.exports = new OpenTasksPlugin()