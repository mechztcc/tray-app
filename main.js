const { app, Menu, MenuItem, Tray } = require('electron');
const { shell } = require('electron');
const { BrowserWindow } = require('electron');
const { dialog } = require('electron')


let menu = null
let tray = null
app.on('ready', () => {
    tray = new Tray('./icons/tray5.png')
    const contextMenu = Menu.buildFromTemplate([

        {
            label: 'Add new',
            click: function () {
                const path = dialog.showOpenDialogSync({
                    filters: [
                        { name: 'All Files', extensions: ['*'] }
                    ],
                })
                
               if(path) {
                const nameSplit = path[0].split("\\")
                contextMenu.append(new MenuItem({
                    label: `${nameSplit[nameSplit.length -1]}`,
                    click: function () {
                        shell.openItem(path[0])
                        
                    },
                    
                }))
               }
                

            }
        },

        {
            label: 'Exit',
            click: function () {
                app.isQuiting = true;
                app.quit();
            }
        },

    ])
    tray.setToolTip('Vai com calma, ainda estou em desenvolvimento ;D')
    tray.setContextMenu(contextMenu)
 











})





