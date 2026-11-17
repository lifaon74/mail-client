import { ILines } from '../../../../../../../misc/lines/lines.type';
import { indentLines } from '../../../../../../../misc/lines/functions/indent-lines';

export function multilineComparison(
  lines: ILines[],
  operator: string,
  ifEmptyLines: ILines,
): ILines {
  return (lines.length === 0)
    ? ifEmptyLines
    : lines.flatMap((lines: ILines, index: number): ILines => {
      return [
        ...((index > 0) ? [`${operator} `] : []),
        `(`,
        ...indentLines(lines),
        `)`,
      ];
    });
}
