import React from "react";
import Link from "next/link";

const BookAppointBtn = () => {
  return (
    <Link
      href="/book-appointment"
      className="px-4 py-2 rounded-md border border-white bg-transparent"
    >
      Book Appointment
    </Link>
  );
};

export default BookAppointBtn;
