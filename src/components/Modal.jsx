import React, { memo } from "react";
import { cn } from "./util/cn";
const Modal = memo(function Modal({
  children,
  id,
  className = "",
  buttonClass = "",
  ...rest
}) {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={id} className="modal " {...rest}>
        <div className={cn(`modal-box bg-main-bg`, className)}>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className={cn(
                `btn btn-sm btn-circle btn-ghost absolute right-2 top-2`,
                buttonClass
              )}
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
});

export default Modal;
