import { isPast } from "date-fns";
import { FC, useMemo } from "react";

import { Profile } from "~/profile";
import formatDate from "~/utils/formatDate";

import InstagramButton from "../InstagramButton";

const Footer: FC<Profile> = ({ hourOpen, instagramUrl, datesClosed }) => {
  const updatedDatesClosed = useMemo(() => {
    return datesClosed.filter(([, date2]) => !isPast(new Date(date2)));
  }, [datesClosed]);

  return (
    <footer className="footer row spaceBetween alignCenter">
      <div className="column space">
        <p className="mr-4 row wrap">
          <span className="mr-4">Hours:</span>
          <span>{hourOpen}:00 AM - TBD</span>
        </p>
        {updatedDatesClosed.length > 0 ? (
          <span>
            <h2>Reminder</h2>
            {updatedDatesClosed.map(([close, open], index) => (
              <div
                className="column"
                key={`close-date-${close}-${open}-${index}`}
              >
                <div className="mr-4 row wrap">
                  <span className="mr-4">Close:</span>
                  <span>{formatDate(new Date(close))}</span>
                </div>
                <div className="mr-4 row wrap">
                  <span className="mr-4">Reopen:</span>
                  <span>{formatDate(new Date(open))}</span>
                </div>
              </div>
            ))}
          </span>
        ) : null}
      </div>
      <div className="column space">
        <span className="center-text desktop-only">
          Follow us for more updates
        </span>
        <InstagramButton instagramUrl={instagramUrl} />
      </div>
    </footer>
  );
};

export default Footer;
