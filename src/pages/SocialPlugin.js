import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillSkype,
  AiFillGoogleSquare,
} from "react-icons/ai";
import {
  FaTumblrSquare,
  FaWikipediaW,
  FaPinterestSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SocialPlugin() {
  return (
    <div className="container  mt-4">
      <h2 className="pb-2">Social Plugin...</h2>
      <div className="row blog" style={{ lineHeight: 5 }}>
        <div className="col">
          <Link target="_blank" to="https://www.facebook.com/">
            <AiFillFacebook size={40} color="#000000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.twitter.com/">
            <AiFillTwitterSquare size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.linkedin.com/">
            <AiFillLinkedin size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.youtube.com/">
            <AiFillYoutube size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.instagram.com/">
            <AiFillInstagram size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.skype.com/">
            <AiFillSkype size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.tumblr.com/">
            <FaTumblrSquare size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.wikipedia.com/">
            <FaWikipediaW size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.google.com/">
            <AiFillGoogleSquare size={40} color="#000" />
          </Link>
        </div>
        <div className="col">
          <Link target="_blank" to="https://www.pinterest.com/">
            <FaPinterestSquare size={40} color="#000" />
          </Link>
        </div>
      </div>
    </div>
  );
}
