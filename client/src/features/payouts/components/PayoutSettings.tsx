import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import BanksDropDown from "./BanksDropDown";

const PayoutSettings = () => {
  const [isDetailsVerified, setIsDetailsVerified] = useState<boolean>(false);
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);
  const [isOTPVerified, setIsOTPVerified] = useState<boolean>(false);
  const [accountNo, setAccountNo] = useState<number>(7079983007);

  const handleSubmit = async () => {
    if (isOTPVerified) {
      setIsDetailsVerified(false);
      setIsOTPSent(false);
      setIsOTPVerified(false);
    }
  };

  return (
    <div aria-label="Payout Settings" className="w-full flex flex-col gap-2">
      <h2 className="text-xl"> Bank Information </h2>
      <form
        aria-label="account settings form"
        onSubmit={e => e.preventDefault()}
        className="w-full flex flex-col gap-4 mt-4 mb-10"
      >
        <div className="w-full flex flex-col gap-2">
          <span> Bank Name </span>
          <BanksDropDown />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="account-number"> Account Number </label>
          <Input
            type="number"
            id="account-number"
            value={accountNo}
            onChange={e => setAccountNo(Number(e.target.value))}
          />
        </div>

        {isDetailsVerified && (
          <div className="w-full">
            <div className="w-full flex flex-col gap-2 capitalize p-4 bg-green-100 border border-green-300 rounded-md mb-4">
              <h4 className="font-bold text-lg"> Account Holder: </h4>
              Adebayo Muis Ayodeji
            </div>

            {isOTPSent && (
              <Input
                type="number"
                placeholder="Enter the OTP sent to your email"
              />
            )}
          </div>
        )}

        {isDetailsVerified ? (
          !isOTPSent && (
            <Button onClick={() => setIsOTPSent(true)}> Send OTP</Button>
          )
        ) : (
          <Button onClick={() => setIsDetailsVerified(true)}>
            Verify Details
          </Button>
        )}

        {isDetailsVerified && isOTPSent && (
          <Button onClick={handleSubmit}>Save Changes</Button>
        )}
      </form>

      <h2 className="text-xl"> Security Notice </h2>
      <ul className="ml-8 [&_li]:list-disc [&_li]:mb-1">
        <li> OTP is required to change payout info. </li>
        <li> Your bank details are well encrypted. </li>
        <li>
          Last updated on: <strong>Oct 22, 2025.</strong>
        </li>
      </ul>
    </div>
  );
};
export default PayoutSettings;
