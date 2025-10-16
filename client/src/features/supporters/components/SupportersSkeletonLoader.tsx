import SkeletonLoader from "@/components/ui/SkeletonLoader";

const SupportersSkeletonLoader = () => {
  return (
    <table className="w-full border border-border border-separate rounded-md border-spacing-0 mb-0">
      <thead>
        <tr className="[&_th]:border [&_th]:border-border">
          <th className="px-5 py-3 rounded-tl-md">Name</th>
          <th className="px-5 py-3">Smiles</th>
          <th className="px-5 py-3">Amount</th>
          <th className="px-5 py-3">Message</th>
          <th className="px-5 py-3 rounded-tr-md">Time</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, idx) => (
          <tr
            key={idx}
            className="[&_td]:min-w-32 [&_td]:max-w-[12rem] [&_td]:px-5 [&_td]:py-3 [&_td]:border"
          >
            <td>
              <SkeletonLoader className="h-6 w-24" />
            </td>
            <td>
              <SkeletonLoader className="h-6 w-10" />
            </td>
            <td>
              <SkeletonLoader className="h-6 w-14" />
            </td>
            <td>
              <SkeletonLoader className="h-6 w-full" />
            </td>
            <td>
              <SkeletonLoader className="h-6 w-20" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SupportersSkeletonLoader;
