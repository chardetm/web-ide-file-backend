import { CapytaleRichTextEditor } from "@capytale/capytale-rich-text-editor";
import "@capytale/capytale-rich-text-editor/style.css";
import { WebIDEWindow } from "web-ide";

export type StatementWindowProps = {
  onHide?: () => void;
  onDemaximize?: () => void;
  onMaximize?: () => void;
  statement: string;
};

export function StatementWindow({
  statement,
  onMaximize,
  onDemaximize,
  onHide,
  ...props
}: StatementWindowProps) {
  return (
    <WebIDEWindow
      windowTitle="Énoncé"
      aria-label="Énoncé"
      onMaximize={onMaximize}
      onDemaximize={onDemaximize}
      onHide={onHide}
      {...props}
    >
      <CapytaleRichTextEditor
        initialEditorState={statement ? statement : undefined}
        isEditable={false}
      />
    </WebIDEWindow>
  );
}
