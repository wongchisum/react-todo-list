/**
 *
 * Item:渲染待辦事項
 */
import { useState } from "react";
export default function Item(props) {
  const { text, done, index, onItemDoneUpdate, onItemTextUpdate } = props;

  const [editable, setEditable] = useState(false); // 判斷是否可以修改
  const [inputText, setInputText] = useState(text);

  /**處理checkbox勾選情況的變動 */
  const hanldeCheckChange = (event) => {
    /**取到的checked是變動之後的值 */
    const { checked } = event.target;
    onItemDoneUpdate(index, checked);
  };

  /**
   * 處理點擊更新列表項
   * 1.點擊之後可以開始修改，未點擊或者已經完成則不行
   * */
  const handleItemUpdate = () => {
    setEditable(true);
  };

  /**處理更新過程中，輸入框事件 */
  const handleUpdateInputChange = (event) => {
    const { value } = event.target;
    setInputText(value);
  };

  /**處理完成更新的事件 */
  const handleFinish = () => {
    onItemTextUpdate(index, inputText);
    // 處理完成之後，變成不可編輯的狀態
    setEditable(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={done}
        onChange={hanldeCheckChange}
      ></input>
      <span>{text}</span>
      {editable && (
        <>
          <input
            type="text"
            value={inputText}
            onChange={handleUpdateInputChange}
          ></input>
          <button onClick={handleFinish}>Finish</button>
        </>
      )}
      <button onClick={handleItemUpdate}>Update</button>
    </div>
  );
}
