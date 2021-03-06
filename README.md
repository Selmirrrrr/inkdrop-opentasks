# OpenTasks

OpenTasks is an Inkdrop plugin that automagically sets the status of your notes depending on whether the note has (open) tasks or not.

![inline demo](https://raw.githubusercontent.com/Selmirrrrr/inkdrop-opentasks/master/docs/demo.gif)

By letting OpenTask handle notes statuses for you you'll be able to quickly find in your notes what has to be done. Simply click on `Status > Active` in your left menu.

![inlinem menu](https://raw.githubusercontent.com/Selmirrrrr/inkdrop-opentasks/master/docs/menu.png)

## Install

```
ipm install opentasks
```

## Usage

### `status:none`

A note that didn't have any tasks will have its status set to `none`

![status none note](https://raw.githubusercontent.com/Selmirrrrr/inkdrop-opentasks/master/docs/none.png)

### `status:active`

A note that has, at least, one open task will have its status set to `active`

![status active note](https://raw.githubusercontent.com/Selmirrrrr/inkdrop-opentasks/master/docs/active.png)

### `status:completed`

A note that has tasks, but all of them are completed, will, obviously, have its status set to `completed`

![status completed note](https://raw.githubusercontent.com/Selmirrrrr/inkdrop-opentasks/master/docs/completed.png)

### `status:dropped` or `status:onHold`

Notes whose status has been manually set to `dropped` or `onHold` won't have its status updated by the plugin.

### Manual refresh

Notes statuses are set "automagically" when a note is saved.

But, on the first time, you'll need to trigger it manually with one of those two methods : 

 - keyboard shortcut : `CTRL` + `ALT` + `T`
 - menu : `Menu` > `Plugins` > `opentasks` > `Refresh notes status`

 This will iterate through all your notes (max 20'000) and set the status according to tasks in it.

## Changelog

### 1.1.3 - Menu improvement
* Improved menu label for the plugin
### 1.1.2 - First Release
* I'm done 😎