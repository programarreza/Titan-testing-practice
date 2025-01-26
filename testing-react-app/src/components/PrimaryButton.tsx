type PrimaryButtonProps = {
  actionType?: string;
};

const PrimaryButton = ({ actionType = "Add" }: PrimaryButtonProps) => {
  return (
    <div>
      <button>Click to {actionType}</button>
    </div>
  );
};

export default PrimaryButton;
