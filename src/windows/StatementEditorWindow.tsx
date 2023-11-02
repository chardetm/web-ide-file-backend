import { CapytaleRichTextEditor } from "@capytale/capytale-rich-text-editor";
import { WebIDEWindow } from "web-ide";

export type StatementEditorWindowProps = {
  className?: string;
  onHide?: () => void;
  onDemaximize?: () => void;
  onMaximize?: () => void;
  statement: string;
  onChange?: (statement: string) => void;
};

export function StatementEditorWindow({
  className = "",
  onHide,
  onDemaximize,
  onMaximize,
  statement,
  onChange,
}: StatementEditorWindowProps) {
  return (
    <WebIDEWindow
      className={className}
      windowTitle="Éditeur d'énoncé"
      aria-label="Éditeur d'énoncé"
      onMaximize={onMaximize}
      onDemaximize={onDemaximize}
      onHide={onHide}
    >
      <CapytaleRichTextEditor
        initialEditorState={statement ? statement : undefined}
        isEditable={true}
        onJsonChange={onChange}
      />
    </WebIDEWindow>
  );
}
