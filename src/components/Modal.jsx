import React, { memo } from "react";
import { cn } from "./util/cn";
const Modal = memo(function Modal({
  children,
  id,
  className = "",
  buttonClass = "",
  xmark,
  ...rest
}) {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={id} className="modal " {...rest}>
        <div
          className={cn(
            `modal-box bg-main-bg border border-darslar-border`,
            className
          )}
        >
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {!xmark && (
              <button
                className={cn(
                  ` btn btn-sm text-title btn-circle hover:bg-second-bg bg-main-bg border-none hover:border shadow-none absolute right-2 top-2`,
                  buttonClass
                )}
              >
                ✕
              </button>
            )}
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
});

export default Modal;
