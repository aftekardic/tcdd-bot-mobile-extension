const { exec } = require("child_process");

exports.getTickets = async (req, res) => {
  let retryCount = 0;
  const maxRetries = 21;

  while (retryCount < maxRetries) {
    try {
      const stdout = await executePythonScript(JSON.stringify(req.body));
      const jsonFormattedOutput = stdout.replace(/'/g, '"'); // Tek tırnakları çift tırnaklarla değiştir
      const jsonResponse = JSON.parse(jsonFormattedOutput);
      return res.status(200).json(jsonResponse);
    } catch (error) {
      console.error(`exec error: ${error}`);
      retryCount++;
      if (retryCount === maxRetries) {
        return res.status(500).send(error.message);
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
};

const scriptPath = "src/services/ticket-finder/rpa.py";

function executePythonScript(args) {
  console.log(
    `src/services/ticket-finder/env/bin/python3 ${scriptPath} ${args}`
  );
  return new Promise((resolve, reject) => {
    exec(
      `src/services/ticket-finder/env/bin/python3 ${scriptPath} ${args}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      }
    );
  });
}
