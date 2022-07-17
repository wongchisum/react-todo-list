/**
 * Todo:一個待辦清單應用
 */
import { useState } from "react";
import Input from "../Input";
import List from "../List";
export default function Todo() {
  const [list, setList] = useState([]); // 用來處理我們待辦清單

  /**
   * 處理新增待辦項
   * {text,done}
   * text:待辦項本身的名稱
   * done:是否已經完成
   *  */
  const handleListAdd = (text) => {
    setList([...list, { text, done: false }]);
  };

  /**
   * 處理列表項的變動
   * index:列表項索引
   * nextDone:列表項更新之後的狀態(done)
   *  */
  const handleItemDoneUpdate = (index, nextDone) => {
    const nextList = [...list].map((item, idx) => {
      return idx === index ? { ...item, done: nextDone } : item;
    });

    setList(nextList);
  };

  /**
   *處理列表項的文字發生更新
   */

  const handleItemTextUpdate = (index, nextText) => {
    const nextList = [...list].map((item, idx) => {
      return idx === index ? { ...item, text: nextText } : item;
    });
    setList(nextList);
  };

  /**使用Fragment去作為父元素 */
  return (
    <>
      <Input onListAdd={handleListAdd} />
      <List
        data={list}
        onItemDoneUpdate={handleItemDoneUpdate}
        onItemTextUpdate={handleItemTextUpdate}
      />
    </>
  );
}
