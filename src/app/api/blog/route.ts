
"use server"
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";
import serviceAccountAuth from "../auth";
import BlogPost from "@/types/Blog";

export async function GET() {
  try {
    // Initialize the Google Spreadsheet
    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEETS_ID!,
      serviceAccountAuth
    );

    // Load document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["Blog"];

    // Load the entire range of cells
    await sheet.loadCells("A1:F");

    // Initialize an array to hold blog data
    const blogData: BlogPost[] = [];

    // Get the number of non-empty cells using cellStats
    const nonEmptyCells = sheet.cellStats.nonEmpty;

    /*--------------------------------------------
      ---- GET NUM_OF_ROWS IN TABLE
      ---- It calculate by Total Cell / Total Cols
      -------------------------------------------- */

    const NUM_OF_COLUMNS = 6;
    const nonEmptyRows = nonEmptyCells / NUM_OF_COLUMNS;

    const getCellValue = (rowIndex: number, colIndex: number) => {
      return sheet.getCell(rowIndex, colIndex).value
        ? String(sheet.getCell(rowIndex, colIndex).value)
        : "";
    };

    const getCellThumbnailUrl = (
      rowIndex: number,
      colIndex: number,
      width: number = 1000
    ): string => {
      const driveUrl = sheet.getCell(rowIndex, colIndex).value
        ? String(sheet.getCell(rowIndex, colIndex).value)
        : "";
      // Regular expression to match the file ID from the URL
      const match = driveUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);

      // If a match is found, construct the thumbnail URL
      if (match && match[1]) {
        const fileId = match[1];
        return `https://drive.google.com/uc?export=view&id=${fileId}&sz=w${width}`;
      }

      // Return null if no ID is found
      return "";
    };

    // Loop through the non-empty rows, skipping the header
    for (let rowIndex = 1; rowIndex < nonEmptyRows; rowIndex++) {
      const rowData: BlogPost = {
        id: getCellValue(rowIndex, 0), // Column A (ID)
        title: getCellValue(rowIndex, 1), // Column B (Title)
        imageUrl: getCellThumbnailUrl(rowIndex, 2), // Column C (Image Url)
        date: getCellValue(rowIndex, 3), // Column D (Date)
        tag: getCellValue(rowIndex, 4), // Column E (Tag)
        category: getCellValue(rowIndex, 5), // Column F (Category)
      };

      // Push the row data into the blogData array only if ID is present
      if (rowData.id) {
        blogData.push(rowData);
      }
    }

    // Return data as JSON
    return NextResponse.json({
      sheetTitle: sheet.title,
      blogs: blogData,
    });
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return NextResponse.json(
      { error: "Failed to interact with Google Sheets" },
      { status: 500 }
    );
  }
}
