import { FaRegImage } from "react-icons/fa";

export default function LoadingCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-base-200">
      {/* Skeleton Image Area with Icon */}
      <div className="skeleton h-48 w-full flex items-center justify-center bg-base-300">
        <FaRegImage className="text-4xl text-base-content/20" />
      </div>
      
      <div className="card-body gap-4 flex items-center justify-center mx-auto">
        {/* Skeleton Text Lines */}
        <div className="skeleton h-6 w-3/4"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-5/6"></div>
        
        <div className="card-actions justify-end mt-4">
          <div className="skeleton h-10 w-24 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
