/**
 * Input:處理輸入，點擊提交按鈕會增加待辦項
 *
 * onListAdd:處理列表新增的事件
 */

import { useState } from "react";

export default function Input(props) {
  const { onListAdd } = props;
  const [text, setText] = useState(""); // 內部的狀態，用於表示現在input的值

  /**處理輸入框變動 */
  const handleInputChange = (event) => {
    const { value } = event.target;
    setText(value);
  };
  /**
   * 添加待辦項
   * 1.當用戶輸入的內容是空的時候，我們不去更新列表項
   * 2.當用戶完成提交之後，清空現在的內容
   *  */
  const handleAdd = () => {
    /**用戶內容不能為空,判斷清空空格之後的string的長度*/
    if (text.trim().length === 0) {
        window.alert("請輸入待辦事項！")
        return;
    } 
    onListAdd(text);
    /**提交完成之後，清空我們現在輸入框的內容 */
    setText("")
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        maxLength={10}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
