import { defineExecuta } from "@anna-ai/app-runtime";

export default defineExecuta({
  id: "data2chart-analyzer",
  name: "Data2Chart Analyzer",
  description: "Turn CSV into beautiful charts with AI insights",
  input: {
    csvData: { type: "string", label: "CSV Data" },
    chartType: { type: "string", label: "Chart Type", default: "bar" }
  },
  async run({ input, llm }: any) {
    const prompt = `You are Data2Chart AI. Analyze this CSV:\n${input.csvData.substring(0,4000)}\n\nProvide:\n1. Summary\n2. 3 Key Insights\n3. Chart.js config for ${input.chartType} chart\n\nBe concise.`;
    const analysis = await llm.complete(prompt);
    return {
      result: analysis,
      _display: {
        blocks: [`📊 **Data2Chart Analysis**\n\n${analysis}`]
      }
    };
  }
});
