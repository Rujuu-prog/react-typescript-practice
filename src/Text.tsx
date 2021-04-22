import { VFC } from "react";

type Props = {
    color: string;
    fontSize: string;
};
//FC(関数コンポーネントの型)を使う際は、propsの型をFC<propsの型>のように宣言する。
//FCは内部的に、propsにchildrenを持つようになっており、呼び出し元で、<関数名>aaa</関数名>のようにaaaを入れてもchildrenとしてうkr鳥エラーが出ない
//∴VFCを使う
export const Text: VFC<Props> = (props) => {
    const {color, fontSize} = props;
    return(
        //<p style={{color: color, fontsize: fontsize}}>テキストです</p>の略
        <p style={{color, fontSize}}>テキストです</p>
    );
}