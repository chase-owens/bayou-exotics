import { isPast } from "date-fns";
import { FC, useMemo } from "react";

import { Profile } from "~/profile";
import formatDate from "~/utils/formatDate";

import InstagramButton from "../InstagramButton";

const Footer: FC<Profile> = ({
  hourClose,
  hourOpen,
  instagramUrl,
  datesClosed,
}) => {
  const updatedDatesClosed = useMemo(() => {
    return datesClosed.filter(([, date2]) => !isPast(new Date(date2)));
  }, [datesClosed]);

  return (
    <footer className="footer row spaceBetween alignCenter">
      <div className="column space">
        <p className="">
          Hours: {hourOpen}:00 AM - {hourClose - 12}:00 PM
        </p>
        {updatedDatesClosed.length > 0 ? (
          <span>
            <h2>Reminder</h2>
            {updatedDatesClosed.map(([close, open], index) => (
              <p
                className="column"
                key={`close-date-${close}-${open}-${index}`}
              >
                <span>Close: {formatDate(new Date(close))}</span>
                <span>Reopen: {formatDate(new Date(open))}</span>
              </p>
            ))}
          </span>
        ) : null}
      </div>
      <div className="column space">
        <span className="center-text">Follow us for more updates</span>
        <InstagramButton instagramUrl={instagramUrl} />
      </div>
    </footer>
  );
};

export default Footer;
