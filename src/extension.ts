import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let interval = setInterval(showMessage, 20 * 60 * 1000);

    async function showMessage() {
        clearInterval(interval);

        vscode.window.showInformationMessage('It\'s time to rest your eyes!\n\nLook 20 feet away for 20 seconds.', { modal: true });

        interval = setInterval(showMessage, 20 * 60 * 1000);
    }
}

export function deactivate() { }
