#!/bin/bash
cd /home/kavia/workspace/code-generation/cleartrack-expense--income-dashboard-69749-c37a0024/expense_tracker_backend_workspace/expense_tracker_backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

