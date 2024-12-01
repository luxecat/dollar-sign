#!/usr/bin/env node

import { spawn } from "node:child_process";

const args = process.argv.slice(2);

if (!args[0]) {
  throw new Error("Please provide a command to run");
}

const cmd = spawn(args[0], args.slice(1), {
  stdio: "inherit",
});

cmd.on("exit", (code) => {
  process.exit(code);
});
