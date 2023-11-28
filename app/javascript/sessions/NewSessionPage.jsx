import React from "react";

export const NewSessionPage = () => {
  return (
      <div className="p-4 flex basis-1 flex-col">
          <h1 className="text-3xl w-full">Log in with passkey</h1>
          <div className="p-2 flex basis-2 flex-col">
              <form action="/sessions" method="post">
                  <div className="flex flex-col p-2">
                      <label htmlFor="email" className="pb-2 text-xl">Email</label>
                      <input type="text" id="email" name="email" value=""
                             className="px-4 py-2 text-lg border-solid border-2 border-slate-200 rounded"/>
                  </div>
                  <div className="flex flex-col p-2">
                      <button type="sumbit"
                              className="px-4 py-2 bg-zinc-500 hover:bg-zinc-700 text-slate-50 hover:text-gray-50 rounded w-32">Log in
                      </button>
                  </div>
              </form>
          </div>
      </div>
  );
};
