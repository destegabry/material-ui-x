import { GridRowId } from './gridRows';
import type { GridApiRef } from './api';

/**
 * The options applicable to any export format.
 */
export interface GridExportOptions {
  /**
   * The columns exported.
   * This should only be used if you want to restrict the columns exports.
   */
  fields?: string[];
  /**
   * If `true`, the hidden columns will also be exported.
   * @default false
   */
  allColumns?: boolean;
}

export interface GridCsvGetRowsToExportParams {
  /**
   * The API of the grid.
   */
  apiRef: GridApiRef;
}

/**
 * The options to apply on the CSV export.
 */
export interface GridCsvExportOptions extends GridExportOptions {
  /**
   * The character used to separate fields.
   * @default ','
   */
  delimiter?: string;
  /**
   * The string used as the file name.
   * @default `document.title`
   */
  fileName?: string;
  /**
   * If `true`, the UTF-8 Byte Order Mark (BOM) prefixes the exported file.
   * This can allow Excel to automatically detect file encoding as UTF-8.
   * @default false
   */
  utf8WithBom?: boolean;
  /**
   * If `true`, the first row of the CSV will include the headers of the grid.
   * @default true
   */
  includeHeaders?: boolean;
  /**
   * Function that returns the id of the rows to export on the order they should be exported.
   * @param {GridCsvGetRowsToExportParams} params With all properties from [[GridCsvGetRowsToExportParams]].
   * @returns {GridRowId[]} The id of the rows to export.
   */
  getRowsToExport?: (params: GridCsvGetRowsToExportParams) => GridRowId[];
}

/**
 * The options to apply on the Print export.
 */
export interface GridPrintExportOptions extends GridExportOptions {
  /**
   * The value to be used as the print window title.
   * @default The title of the page.
   */
  fileName?: string;
  /**
   * If `true`, the toolbar is removed for when printing.
   * @default false
   */
  hideToolbar?: boolean;
  /**
   * If `true`, the footer is removed for when printing.
   * @default false
   */
  hideFooter?: boolean;
  /**
   * If `false`, all <style> and <link type="stylesheet" /> tags from the <head> will not be copied
   * to the print window.
   * @default true
   */
  copyStyles?: boolean;
  /**
   * One or more classes passed to the print window.
   */
  bodyClassName?: string;
  /**
   * Provide Print specific styles to the print window.
   */
  pageStyle?: string | Function;
}

/**
 * Available export formats.
 */
export type GridExportFormat = 'csv' | 'print';
