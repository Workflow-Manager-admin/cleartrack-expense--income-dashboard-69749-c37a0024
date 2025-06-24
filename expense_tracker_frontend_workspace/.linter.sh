#!/bin/bash
cd /home/kavia/workspace/code-generation/cleartrack-expense--income-dashboard-69749-c37a0024/expense_tracker_frontend_workspace/expense_tracker_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

