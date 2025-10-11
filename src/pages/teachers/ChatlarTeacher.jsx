import React, { useState } from "react";

//icons
import { LuSearch } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";
import { Form } from "react-router-dom";
import dildora from "../../assets/teacher/chat/Ellipse 1.png";
import munisa from "../../assets/teacher/chat/Ellipse 2.png";
import shodiyor from "../../assets/teacher/chat/Ellipse 3.png";
import rayxona from "../../assets/teacher/chat/Ellipse 4.png";
import { FaEllipsisV } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

//useWindowSiza
import { useWindowSize } from "../../hooks/optimizationHooks/useWindowSize";
//main function
function ChatlarTeacher() {
  const [showChat, setShowChat] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [activeChatIndex, setActiveChatIndex] = useState(null);
  const { width } = useWindowSize();

  const data = [
    {
      name: "Munisa Romanova",
      status: "online",
      lastMessage: "Assalomu alaykum",
      lastMessageTime: "12:44",
      lastMessageSender: "self",
      messageStatus: "arrived",
      unreadMessage: 0,
      avatar: munisa,
    },
    {
      name: "Dildora tojiyeva",
      status: "offline",
      lastMessage: "Uyga vazifa",
      lastMessageTime: "10:24",
      lastMessageSender: "user",
      messageStatus: null,
      unreadMessage: 0,
      avatar: dildora,
    },
    {
      name: "Shodiyor To'xtaboyev",
      status: "offline",
      lastMessage: "Va alaykum assalom",
      lastMessageTime: "14:11",
      lastMessageSender: "user",
      messageStatus: null,
      unreadMessage: 0,
      avatar: shodiyor,
    },
    {
      name: "Rayhona",
      status: "online",
      lastMessage: "Assalomu alaykum",
      lastMessageTime: "12:44",
      lastMessageSender: "self",
      messageStatus: "arrived",
      unreadMessage: 2,
      avatar: rayxona,
    },
  ];

  //handleClickUsers
  const handleClickUsers = (name) => {
    const response = data.find((d) => d.name === name);
    const activeIndex = data.findIndex((d) => d.name === response.name);
    console.log(activeIndex);
    setActiveChatIndex(activeIndex);
    setActiveChat(response);
    setShowChat(true);
  };
  return (
    <section className="absolute md:static top-[70px] left-0  w-full h-[calc(100vh-70px)] md:h-[95%] md:my-3 bg-main-bg  md:rounded-xl overflow-hidden md:border border-darslar-border flex ">
      <div
        className={`left-section lg:max-w-[470px] lg:flex  w-full h-full ${
          width < 1024 && !showChat ? "flex" : "hidden"
        } flex-col`}
      >
        <div className="search-section p-5 bg-main-bg border-b border-chat-user-border">
          <label className="border bg-second-bg border-[#77BFFF] md:border-darslar-border flex items-center h-10 rounded-full px-5">
            <input
              type="search"
              placeholder="Qidirish"
              className="flex-1 bg-transparent focus:border-none text-title focus:shadow-none focus:outline-none focus:ring-0"
            />
            <LuSearch className="w-5 h-5 text-lighter-text" />
          </label>
        </div>
        <div className="chat-list border-r flex-1 overflow-y-auto h-full border-darslar-border">
          {data.map((user, index) => {
            return (
              <div
                key={user.name}
                onClick={() => handleClickUsers(user.name, index)}
                className={`px-4 py-2 flex gap-3 border-b border-chat-user-border cursor-pointer hover:bg-chat-hover ${
                  index === activeChatIndex ? "bg-active-chat" : "bg-main-bg"
                }`}
              >
                <div className="avatar relative">
                  <div className="w-12 h-12 rounded-full">
                    <img src={user.avatar} />
                  </div>

                  {user.status === "online" && (
                    <span className="absolute bottom-[4px] right-[2px] block w-2 h-2 rounded-full bg-green-500 ring-2 ring-main-bg"></span>
                  )}
                </div>
                <div className="flex flex-1 justify-between items-center">
                  <div>
                    <h2 className="font-semibold text-title xl:text-lg">
                      {user.name}
                    </h2>
                    <p className="text-lightest-text text-sm">
                      {user.lastMessage}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    {user.unreadMessage > 0 && (
                      <p className="w-5 h-5 rounded-full text-white text-sm flex justify-center self-end items-center bg-blue-first">
                        {user.unreadMessage}
                      </p>
                    )}

                    <div className="flex gap-1 items-center">
                      <span className="text-lighter-text hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      {user.lastMessageSender !== "user" && (
                        <span class="inline-block">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M15.4948 6.93497C15.6446 7.06575 15.7364 7.25066 15.7499 7.44906C15.7634 7.64747 15.6975 7.84311 15.5668 7.99297L7.70984 16.993C7.63944 17.0736 7.5526 17.1383 7.45514 17.1825C7.35769 17.2268 7.25188 17.2497 7.14484 17.2497C7.03779 17.2497 6.93199 17.2268 6.83453 17.1825C6.73708 17.1383 6.65023 17.0736 6.57984 16.993L3.43684 13.393C3.31076 13.2425 3.24871 13.0486 3.264 12.8529C3.27929 12.6572 3.37071 12.4753 3.51862 12.3462C3.66654 12.2171 3.85916 12.1512 4.05514 12.1626C4.25112 12.1739 4.43483 12.2617 4.56684 12.407L7.14484 15.36L14.4368 7.00697C14.5676 6.85716 14.7525 6.76542 14.9509 6.75192C15.1493 6.73841 15.345 6.80426 15.4948 6.93497ZM20.5198 7.01997C20.8198 7.30497 20.8308 7.77997 20.5448 8.07997L11.9738 17.08C11.899 17.1586 11.8079 17.22 11.707 17.26C11.6061 17.3 11.4977 17.3176 11.3893 17.3116C11.2809 17.3057 11.1751 17.2762 11.0792 17.2253C10.9833 17.1745 10.8996 17.1034 10.8338 17.017L10.4048 16.454C10.2925 16.3075 10.2381 16.1247 10.2521 15.9406C10.2661 15.7565 10.3475 15.584 10.4808 15.4562C10.614 15.3284 10.7897 15.2542 10.9743 15.2479C11.1588 15.2416 11.3392 15.3036 11.4808 15.422L19.4588 7.04497C19.596 6.90102 19.7847 6.81741 19.9835 6.81254C20.1822 6.80766 20.3748 6.88192 20.5188 7.01897"
                              fill="#374DBC"
                            />
                          </svg>
                        </span>
                      )}
                      <span className="text-sm text-light-text">
                        {user.lastMessageTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom-section border-t border-r border-darslar-border py-5 flex justify-center items-center gap-10">
          <div className="flex flex-col gap-2 justify-center items-center text-blue-first cursor-pointer">
            <span>
              <HiOutlineUser className="w-6 h-6" />
            </span>
            <span>Chatlar</span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center text-lightest-text cursor-pointer">
            <span>
              <HiOutlineUsers className="w-6 h-6" />
            </span>
            <span>Guruhlar</span>
          </div>
        </div>
      </div>

      <div
        className={`right-section flex-1 w-full min-w-sm ${
          width < 1024 && showChat ? "flex" : "hidden"
        } lg:flex flex-col`}
      >
        <div className="top-section flex gap-4 items-center px-4 lg:px-10 w-full h-[81px] bg-main-bg border-b border-chat-user-border">
          {activeChat && (
            <>
              <button
                onClick={() => setShowChat(false)}
                className="text-title lg:hidden"
              >
                <FaArrowLeft className="w-5 h-5" />
              </button>
              <div className="avatar relative">
                <div className="w-12 h-12 rounded-full">
                  <img src={activeChat.avatar} />
                </div>
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-title">
                    {activeChat.name}
                  </h2>
                  <p>
                    {activeChat.status === "online" ? (
                      <span className="text-[#0B9A0B] text-sm">Online</span>
                    ) : (
                      <span className="text-lighter-text text-sm">
                        Last seen recently
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                      <FaEllipsisV className="w-5 h-5" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex-1 bg-chat-bg">
          <div className="w-full h-full flex justify-center items-center">
            <h2 className="text-light-text">No message here yet!</h2>
          </div>
        </div>
        <div className="h-[97px] w-full bg-main-bg">
          <Form className="w-full h-full flex items-center px-3 md:px-8">
            <label className="w-full rounded-full overflow-hidden h-10 flex items-center gap-3 border border-[#374DBC] ps-3">
              <button className="cursor-pointer">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5437 9.84196L11.0766 14.2216C10.6519 14.6416 10.4186 15.2156 10.4279 15.8188C10.4406 16.429 10.6919 17.0099 11.1279 17.437C11.5654 17.8698 12.1546 18.1183 12.7647 18.1288C13.0634 18.1351 13.3604 18.0815 13.6381 17.9714C13.9158 17.8612 14.1686 17.6965 14.3817 17.4871L18.8477 13.1075C19.2691 12.6907 19.6013 12.1926 19.8243 11.6435C20.0473 11.0944 20.1565 10.5057 20.1451 9.91313C20.1205 8.6927 19.6188 7.53047 18.7474 6.67563C17.8736 5.81096 16.7005 5.31589 15.4714 5.29313C14.8746 5.28122 14.2815 5.38837 13.7266 5.60832C13.1717 5.82826 12.6663 6.1566 12.2397 6.57413L7.77024 10.955C7.13873 11.5805 6.64075 12.3277 6.30645 13.1513C5.97216 13.9749 5.80851 14.8578 5.82541 15.7465C5.86297 17.5767 6.61599 19.3193 7.92307 20.601C9.23308 21.8976 10.9919 22.6404 12.8347 22.6753C13.7302 22.694 14.6204 22.5337 15.4532 22.204C16.286 21.8742 17.0446 21.3816 17.6846 20.755L22.1517 16.373"
                    stroke="#808080"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Xabar yozing ..."
                className="focus:outline-none focus:ring-0 focus:border-none text-title flex-1 min-w-28"
              />
              <button className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10C8.73478 10 8.48043 9.89464 8.29289 9.70711C8.10536 9.51957 8 9.26522 8 9C8 8.73478 8.10536 8.48043 8.29289 8.29289C8.48043 8.10536 8.73478 8 9 8C9.26522 8 9.51957 8.10536 9.70711 8.29289C9.89464 8.48043 10 8.73478 10 9ZM15 10C15.2652 10 15.5196 9.89464 15.7071 9.70711C15.8946 9.51957 16 9.26522 16 9C16 8.73478 15.8946 8.48043 15.7071 8.29289C15.5196 8.10536 15.2652 8 15 8C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9C14 9.26522 14.1054 9.51957 14.2929 9.70711C14.4804 9.89464 14.7348 10 15 10ZM2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V15C22.0002 15.1314 21.9746 15.2616 21.9245 15.3831C21.8744 15.5045 21.8008 15.615 21.708 15.708L15.708 21.708C15.615 21.8008 15.5045 21.8744 15.3831 21.9245C15.2616 21.9746 15.1314 22.0002 15 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H12V16.02H11.992C10.636 16.02 9.648 15.336 9.042 14.726C8.68444 14.3652 8.37763 13.9575 8.13 13.514L8.114 13.484L8.11 13.474L8.108 13.47L8.106 13.468C7.99222 13.228 7.97845 12.9526 8.06772 12.7024C8.15699 12.4522 8.34198 12.2478 8.582 12.134C8.82202 12.0202 9.09741 12.0065 9.34758 12.0957C9.59776 12.185 9.80222 12.37 9.916 12.61C9.936 12.65 9.97067 12.706 10.02 12.778C10.118 12.926 10.264 13.122 10.458 13.314C10.848 13.706 11.356 14.02 11.992 14.02C12.192 14.0209 12.3907 13.9884 12.58 13.924C13.28 12.77 14.55 12 16 12H20V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM20 14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V20H14.586L20 14.586V14Z"
                    fill="#6F6F6F"
                  />
                </svg>
              </button>
              <button className="cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V5C16 3.93913 15.5786 2.92172 14.8284 2.17157C14.0783 1.42143 13.0609 1 12 1C10.9391 1 9.92172 1.42143 9.17157 2.17157C8.42143 2.92172 8 3.93913 8 5V11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15ZM10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V11C14 11.5304 13.7893 12.0391 13.4142 12.4142C13.0391 12.7893 12.5304 13 12 13C11.4696 13 10.9609 12.7893 10.5858 12.4142C10.2107 12.0391 10 11.5304 10 11V5ZM20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10C18.7348 10 18.4804 10.1054 18.2929 10.2929C18.1054 10.4804 18 10.7348 18 11C18 12.5913 17.3679 14.1174 16.2426 15.2426C15.1174 16.3679 13.5913 17 12 17C10.4087 17 8.88258 16.3679 7.75736 15.2426C6.63214 14.1174 6 12.5913 6 11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11C4.00177 12.9473 4.71372 14.8271 6.0024 16.287C7.29107 17.7469 9.06798 18.6866 11 18.93V21H9C8.73478 21 8.48043 21.1054 8.29289 21.2929C8.10536 21.4804 8 21.7348 8 22C8 22.2652 8.10536 22.5196 8.29289 22.7071C8.48043 22.8946 8.73478 23 9 23H15C15.2652 23 15.5196 22.8946 15.7071 22.7071C15.8946 22.5196 16 22.2652 16 22C16 21.7348 15.8946 21.4804 15.7071 21.2929C15.5196 21.1054 15.2652 21 15 21H13V18.93C14.932 18.6866 16.7089 17.7469 17.9976 16.287C19.2863 14.8271 19.9982 12.9473 20 11Z"
                    fill="#6F6F6F"
                  />
                </svg>
              </button>
              <button className="h-full px-3 lg:px-2 xl:px-4 cursor-pointer bg-blue-first text-white text-sm xl:text-md">
                <span className="hidden md:block">Yuborish</span>{" "}
                <span className="md:hidden">
                  <IoSend className="w-5 h-5 " />
                </span>
              </button>
            </label>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default ChatlarTeacher;
