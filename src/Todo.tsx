import React from 'react'

type TodoType = {
    userId: number;
    title: string;
    //?をつけることで必須ではないことを明示的にかける。completedは渡さなくても良いものという扱いになる
    completed?: boolean;
}

export const Todo = (props: TodoType) => {
    //もしpropsで値が渡ってこない場合の初期値をつけておくcompleted
    const {title, userId, completed = false} = props;
    const completeMark = completed? "[完]": "[未]";
    return (
        <div>
            <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>
        </div>
    )
}

