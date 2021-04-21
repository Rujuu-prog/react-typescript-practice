import React from 'react'

export const Todo = (props: any) => {
    const {title, userid} = props;
    return (
        <div>
            <p>{`${title}(ユーザー:${userid})`}</p>
        </div>
    )
}

