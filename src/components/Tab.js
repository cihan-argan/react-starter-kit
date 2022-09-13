import { useEffect, useState } from "react";

function Tab({ children, activeTab, onChange }) {
  const [active, setActive] = useState(activeTab);
  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  useEffect(() => {
    onChange(active);
  }, [active]);
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActive(index)}
            key={index}
            className={activeTab === index ? "bg-green-200" : "bg-gray-100"}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>

      {children[activeTab]}
    </div>
  );
}
Tab.Panel = function ({ children }) {
  return <div>{children}</div>;
};
export default Tab;
