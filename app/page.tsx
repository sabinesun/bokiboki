import {
  Card,
  CardDishCaption,
  CardDishName,
  CardDishTitle,
  CardSection,
  CardSectionName,
} from "@/components/card/card";

export default function Home() {
  return (
    <div className="">
      <Card>
        <CardSection>
          <CardSectionName>Fried Chicken</CardSectionName>
          <CardDishTitle>
            <CardDishName>Wings</CardDishName>
            <CardDishCaption>ailes</CardDishCaption>
          </CardDishTitle>
        </CardSection>
      </Card>
      <div className="border-[0.5px] border-black p-4 relative rounded">
        <div className="border border-black absolute rounded w-full h-full left-2 top-1" />
        <div className="relative">
          <div className="absolute -z-10 font-bold -left-6 top-3">
            <div className="text-5xl text-[#EBE5F3]">치</div>
            <div className="text-5xl text-[#EBE5F3]">킨</div>
          </div>
          <h2 className="text-2xl font-extrabold pl-2">Fried Chicken</h2>
          <hr className="border border-black w-full" />
          <div className="flex w-full justify-between">
            <div className="flex flex-col relative">
              <h3 className="text-lg font-bold pt-2 pl-2">Wings</h3>
              <span className="text-xs absolute bottom-3 pl-2">ailes</span>
            </div>
            <table className="w-1/2">
              <tr>
                <td>6pcs</td>
                <td className="flex justify-end">7.90€</td>
              </tr>
              <tr>
                <td>9pcs</td>
                <td className="flex justify-end">10.90€</td>
              </tr>
            </table>
          </div>
          <hr className="border-[0.5px] border-black w-full" />
          <div className="flex w-full justify-between">
            <div className="flex flex-col relative">
              <h3 className="text-lg font-bold pl-2">Boneless</h3>
              <span className="text-xs absolute bottom-3 pl-2 whitespace-nowrap">
                cuisse désossée
              </span>
            </div>
            <table className="w-1/2">
              <tr>
                <td>petite portion</td>
                <td className="flex justify-end">7.90€</td>
              </tr>
              <tr>
                <td className="whitespace-nowrap">grande portion</td>
                <td className="flex justify-end">11.90€</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="mt-6 relative">
          <div className="absolute -z-10 font-bold -right-4 -top-2">
            <div className="text-3xl text-[#EBE5F3]">炒</div>
            <div className="text-3xl text-[#EBE5F3]">蔬</div>
            <div className="text-3xl text-[#EBE5F3]">菜</div>
          </div>
          <h2 className="text-2xl font-extrabold">Fried Veggie</h2>
          <hr className="border border-black w-full" />
          <div className="flex w-full justify-between">
            <div className="flex space-x-1">
              <h3 className="text-lg font-bold">Choufleur frit</h3>
            </div>
            <table className="w-1/2">
              <tr>
                <td>petit</td>
                <td className="flex justify-end">6.90€</td>
              </tr>
              <tr>
                <td>grand</td>
                <td className="flex justify-end">9.90€</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
