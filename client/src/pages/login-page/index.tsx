const LoginPage = () => {
  return (
    <section className="bg-bg1">
      <div className="container flex items-center justify-center">
        <div className="w-2/6 p-5 rounded-md flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input placeholder="Johndoe" />
          </div>

          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input type="password" placeholder="************" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
