/**
 * List:渲染一個列表，展示現在已有的待辦清單
 * data:接收一個Array
 * 列表的每一項由Item組件組成
 */

import Item from "../Item";
export default function List(props) {
  const { data, onItemDoneUpdate, onItemTextUpdate } = props;

  return data.map((item, index) => {
    return (
      // 等同於<Item done={item.done} text={item.text}>
      <Item
        key={index}
        {...item}
        index={index}
        onItemDoneUpdate={onItemDoneUpdate}
        onItemTextUpdate={onItemTextUpdate}
      />
    );
  });
}
