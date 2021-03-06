import { window, env } from 'vscode';

export enum ErrorType {
  INVALID_JS_OBJECT,
}

export function handleError(error: Error, errorType: ErrorType): void {
  let messageToDisplay = '';

  if (errorType === ErrorType.INVALID_JS_OBJECT) {
    messageToDisplay = `Invalid JavaScript object: ${error.message}`;
  }

  window.showErrorMessage(messageToDisplay);
}

export function getSelectedText(): Promise<string> {
  const { selection, document } = window.activeTextEditor!;
  const selectedText = document.getText(selection).trim();
  return Promise.resolve(selectedText);
}

export function addToClipboard(string: string): void {
  env.clipboard.writeText(string);
}
