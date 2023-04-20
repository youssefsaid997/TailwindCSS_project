function About() {
  return (
  
    <div id="about">
    <div className="container relative mt-10 p-6 mx-auto">
        <div className="flex flex-row">
          <div className="flex flex-col p-7 mx-auto w-1/3">
            <img src="../src/assets/avatar.jpg" alt="" className="w-70" />
          </div>
          <div className="flex flex-col">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque voluptate dolores totam assumenda excepturi saepe doloribus, quidem corporis, nostrum ad adipisci vel, ipsum dolore velit optio expedita libero necessitatibus ipsa dicta asperiores quae? Possimus natus error dicta tenetur. Commodi sed iste aliquid at veniam quasi accusamus atque eum, nihil deserunt?
            </p>
            <a
              href="#cv"
              className="mt-10 w-1/6 text-bold px-7 py-4 bg-black text-white rounded-full shadow-md border-2 border-black hover:text-black hover:bg-white"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
export default About;
