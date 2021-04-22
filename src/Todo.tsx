import React, { VFC } from 'react'
import {TodoType} from './types/todo'

//Pick<型指定したtype, "使う変数">でtypeで指定した変数の中から使うものだけを選べる
// export const Todo = (props: Pick<TodoType, "userId" | "title" | "completed">) => {
//omitは除外するやつ
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
    //もしpropsで値が渡ってこない場合の初期値をつけておくcompleted
    const {title, userId, completed = false} = props;
    const completeMark = completed? "[完]": "[未]";
    return (
        <div>
            <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
        </div>
    )
}

