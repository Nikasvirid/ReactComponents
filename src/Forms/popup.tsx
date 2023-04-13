const Popup = (status: { showPopup: boolean }) => {
  return (
    <div
      className={status.showPopup ? "popup-active popup" : "popup-close popup"}
    >
      <div
        className={
          status.showPopup
            ? "wrapper-active popup__wrapper"
            : "wrapper-close popup__wrapper"
        }
      >
        <div className="popup">Product card created</div>
        <div className="popup__image"></div>
      </div>
    </div>
  );
};

export default Popup;
