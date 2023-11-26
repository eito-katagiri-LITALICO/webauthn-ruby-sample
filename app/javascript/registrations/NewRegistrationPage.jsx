import React from "react";

export const NewRegistrationPage = () => {
    const [nickname, setNickname] = React.useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit");
    }

    return (
        <div className="p-4 flex basis-1 flex-col">
            <h1 className="text-3xl w-full">パスキー登録</h1>
            <div className="p-2 flex basis-2 flex-col">
                <form action="/registrations" method="post" onSubmit={onSubmit}>
                    <div className="flex flex-col p-2">
                        <label htmlFor="nickname" className="pb-2 text-xl">ニックネーム（最大16文字）</label>
                        <input type="text" id="nickname" name="nickname" value={nickname} maxLength="16"
                               onInput={(e) => {
                                   setNickname(e.target.value);
                               }} class="px-4 py-2 text-lg border-solid border-2 border-slate-200 rounded"/>
                    </div>
                    <div className="flex flex-col p-2">
                        <button type="sumbit"
                                className="px-4 py-2 bg-zinc-500 hover:bg-zinc-700 text-slate-50 hover:text-gray-50 rounded w-32">登録する
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
