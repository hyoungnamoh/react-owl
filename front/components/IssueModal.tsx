import React, { ChangeEvent, ChangeEventHandler, FC, useEffect, useState } from 'react';
import styles from '../styles/IssueModal.module.scss';
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

const IssueModal: FC<IssueModalProps> = ({ issue, column, visible, onClickModalClose }) => {
  const [editorState, setEditorState] = useState<EditorState>();
  const [existingEditorState, setExistingEditorState] = useState<EditorState>();
  const [descriptionEditmode, setDescriptionEditmode] = useState<boolean>(false);
  const [titleEditmode, setTitleEditmode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    console.log(issue);
    document.body.style.overflow = 'hidden';
    // console.log(document.getElementsByClassName(styles.title)[0].getAttribute('style').);
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const onEditorStateChange = (e: EditorState) => {
    setEditorState(e);
  }

  const onClickSave = () => {
    setDescriptionEditmode(false);
    setExistingEditorState(editorState);
  }

  const onClickCancel = () => {
    setDescriptionEditmode(false);
    setEditorState(existingEditorState);
  }

  const onFocusEditor = () => {
    setDescriptionEditmode(true);
    setExistingEditorState(editorState);
  }

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  }

  const onClickTitle = () => {
    setTitle(issue?.title || '');
    setTitleEditmode(true);
  }

  return (
    <div className={styles.modalWrapper} >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            {issue?.id || '999999'}
          </div>
          <div style={{ display: 'flex' }}>
            <div>
              ...
            </div>
            <div onClick={onClickModalClose}>
              닫기
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <div className={styles.modalContent}>
            {
              titleEditmode ?
                <textarea className={styles.title} value={title} onChange={onChangeTitle} onBlur={() => setTitleEditmode(false)} autoFocus />
                :
                <div className={styles.title} onClick={onClickTitle}>
                  {issue?.title}
                </div>
            }

            <div className={styles.descriptionTitle}>Description</div>
            <Editor
              editorState={editorState}
              toolbarClassName={styles.editorToolbar}
              wrapperClassName={styles.editorWrapper}
              editorClassName={styles.editor}
              wrapperStyle={descriptionEditmode ? { backgroundColor: '#fff' } : {}}
              editorStyle={descriptionEditmode ? { border: 'blueviolet 1px solid' } : {}}
              onEditorStateChange={onEditorStateChange}
              onFocus={onFocusEditor}
              toolbarHidden={!descriptionEditmode}
              toolbar={{ options: ['inline', 'blockType', 'fontSize', 'image', 'fontFamily', 'list', 'textAlign', 'link', 'emoji'] }}
              placeholder={'Please enter a description...'}
            />
            {
              descriptionEditmode &&
              <div className={styles.editButtonContainer}>
                <button className={styles.saveButton} onClick={onClickSave}>저장</button>
                <button className={styles.cancelButton} onClick={onClickCancel}>취소</button>
              </div>
            }
            <div className={styles.modalFooter}>
              <div className={styles.createdAt}>created at 2021년 4월 20일</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          </div>
        </div>
      </div>
    </div >
  )
}

export default IssueModal;