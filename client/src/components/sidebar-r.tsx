import { Button } from './ui/button';
import { CashIcon, NotifIcon } from './ui/icons';

export const SidebarRight = () => {
  return (
    <section className="bg-bg1 w-[50%] min-h-screen shadow-xl border border-border">
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-center mb-5">
          <div className="flex gap-5 items-center">
            <div className="bg-gray-400 w-14 h-14 rounded-lg"></div>
            <div className="flex flex-col">
              <label className="text-xs">Cachier</label>
              <span className="font-bold">Jane Doe</span>
            </div>
          </div>

          <NotifIcon />
        </div>

        {/* BILLS WRAPPER */}
        <div className="flex flex-col">
          <h4>Bills</h4>

          {/* ITEM CARDS */}
          <div className="flex gap-5 my-5">
            <div className="bg-gray-400 w-14 h-14 rounded-lg"></div>

            <div className="flex-1">
              <span>Iced Americano</span>
              <div className="flex items-center flex-1 justify-between">
                <div className="flex items-center gap-1">
                  <label>x1</label>
                  <div className="bg-badge py-1 px-4 rounded-full">
                    <label>Notes</label>
                  </div>
                </div>
                <label>$99.99</label>
              </div>
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="bg-gray-400 w-14 h-14 rounded-lg"></div>

            <div className="flex-1">
              <span>Iced Americano</span>
              <div className="flex items-center flex-1 justify-between">
                <div className="flex items-center gap-1">
                  <label>x1</label>
                  <div className="bg-badge py-1 px-4 rounded-full">
                    <label>Notes</label>
                  </div>
                </div>
                <label>$99.99</label>
              </div>
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <div className="bg-gray-400 w-14 h-14 rounded-lg"></div>

            <div className="flex-1">
              <span>Iced Americano</span>
              <div className="flex items-center flex-1 justify-between">
                <div className="flex items-center gap-1">
                  <label>x1</label>
                  <div className="bg-badge py-1 px-4 rounded-full">
                    <label>Notes</label>
                  </div>
                </div>
                <label>$99.99</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 gap-2">
          <div className="flex justify-between">
            <label>Subtotal</label>
            <span>$99.99</span>
          </div>

          <div className="flex justify-between">
            <label>Tax (10%)</label>
            <span>$99.99</span>
          </div>

          <div className="w-full border border-border border-dashed"></div>

          <div className="flex justify-between">
            <label>Total</label>
            <span>$99.99</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-8">
          <h5>Payment Method</h5>

          <div className="flex w-full justify-between gap-2">
            <div className="flex rounded-2xl flex-col items-center bg-primary/50 text-black/70 w-full py-4">
              <CashIcon />
              <label className="text-black/70">Cash</label>
            </div>
            <div className="flex rounded-2xl flex-col items-center bg-primary/50 text-black/70 w-full py-4">
              <CashIcon />
              <label className="text-black/70">Cash</label>
            </div>
            <div className="flex rounded-2xl flex-col items-center bg-primary/50 text-black/70 w-full py-4">
              <CashIcon />
              <label className="text-black/70">Cash</label>
            </div>
          </div>

          <div>
            <Button variant="1" type="button">
              Print Bills
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
