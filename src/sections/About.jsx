const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-2 w-full max-container relative lg:my-12 padding"
    >
      <div className="flex-1 flex justify-center items-center sm:m-8 bg-black h-full rounded-md overflow-clip">
        <img
          src={"team.jpg"}
          alt="Team photo"
          width={570}
          height={522}
          className="object-cover  w-full h-full "
        />
      </div>
      <div className="flex flex-1 flex-col box-content items-center py-8 md:p-8 ">
        <h2 className="font-palanquin text-red capitalize text-4xl lg:max-w-lg font-bold">
          About Us
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          <span className=" text-red font-bold">OUR MISSION</span>
          <br />
          At our core, we&apos;re dedicated to providing a platform for students
          to delve into the fascinating realm of power electronics.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          <span className="font-bold">Educate: </span>
          Through engaging workshops, seminars, and hands-on projects, we aim to
          deepen your understanding of power electronics concepts and their
          practical applications.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          <span className="font-bold">Connect: </span>
          Join a community of students, faculty, and industry professionals who
          share your passion. Network, collaborate, and build relationships that
          can shape your academic and professional journey.
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          <span className="font-bold">Inspire: </span>
          Through inspiring talks, industry insights, and exposure to
          cutting-edge research, we strive to ignite the spark of innovation and
          creativity in every member.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          This description aims to convey the mission, offerings, and welcoming
          atmosphere of the IEEE PELS Student Chapter, encouraging students to
          join and actively participate in the community.
        </p>
      </div>
    </section>
  );
};

export default About;
