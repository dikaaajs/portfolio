export default function Tutorial({ dialog, warning, setDialog }) {
  return (
    <div
      className={`absolute h-screen w-screen z-50 bg-[#1f1f1fd2] ${
        dialog && !warning ? "" : "hidden"
      }`}
    >
      <div className="w-[300px] bg-white py-[15px] px-[20px] rounded-md absolute bottom-10 right-[150px]">
        <div className="flex gap-[10px] font-outfit items-center">
          <img src="/hengker.png" alt="" className="rounded-full h-[30px]" />
          <h1 className="font-[500]">hengker</h1>
        </div>
        <div className="">
          <p className="py-[10px] font-mono text-[.8rem]">
            you can click here to move !
          </p>
          <button
            className="py-[5px] px-[10px] bg-blue-500 text-white rounded-lg font-outfit font-[500] text-[.8rem] block ml-auto"
            onClick={() => {
              setDialog(false);
            }}
          >
            alright
          </button>
        </div>
      </div>
    </div>
  );
}
