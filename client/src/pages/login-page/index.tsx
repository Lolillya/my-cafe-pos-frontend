import Logo from '@/assets/logo.png';
import { Button } from '@/components/ui/button';

const LoginPage = () => {
  return (
    <section className="bg-bg2">
      <div className="container flex items-center justify-center">
        <div className="flex items-center w-3/5 bg-bg1 rounded-2xl shadow-md p-5">
          <img src={Logo} alt="logo" width={300} />
          <div className="w-full p-5 rounded-md flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label>Username</label>
              <input placeholder="Johndoe" />
            </div>

            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input type="password" placeholder="************" />
            </div>

            <div>
              <Button variant="1" type="button">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
