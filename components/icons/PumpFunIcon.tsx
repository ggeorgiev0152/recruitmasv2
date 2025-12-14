import pillChristmas from './PillChristmasV2.png';

const LivePumpFunIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-[2vh] ${className}`}>
      <div className="flex items-center space-x-[1vh] text-white font-display text-[2vh] tracking-wider">
        <span className="text-red-500">[</span>
        <div className="w-[1vh] h-[1vh] rounded-full bg-red-500 live-pulse"></div>
        <span>LIVE</span>
        <span className="text-red-500">]</span>
      </div>
      <img src={pillChristmas} alt="Christmas Pill" className="w-[4vh] h-[4vh] object-contain" />
      <span className="font-display text-[2.5vh] text-white">Pump.fun</span>
    </div>
  );
};

export default LivePumpFunIcon;
