import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Income, Expense } from "../../types";

export const Dashboard: React.FC = () => {
  const [incomes, setIncomes] = useState<Income[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [incomesRes, expensesRes] = await Promise.all([
          api.get("/incomes"),
          api.get("/expenses"),
        ]);
        setIncomes(incomesRes.data);
        setExpenses(expensesRes.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };
    fetchData();
  }, []);

  const totalIncome = incomes.reduce((acc, income) => acc + income.amount, 0);
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );
  const balance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={summaryCardStyles}>
          <h3>Total Income</h3>
          <p>${totalIncome.toFixed(2)}</p>
        </div>
        <div style={summaryCardStyles}>
          <h3>Total Expenses</h3>
          <p>${totalExpenses.toFixed(2)}</p>
        </div>
        <div style={summaryCardStyles}>
          <h3>Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

const summaryCardStyles: React.CSSProperties = {
  backgroundColor: "#222",
  padding: "20px",
  borderRadius: "10px",
  flex: 1,
  textAlign: "center",
};
