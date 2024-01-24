import React from "react";
import { Drawer, InputAdornment, TextField } from "@mui/material";
function TopSider({ isOpen, onClose }) {
  return (
    <div>
      <Drawer anchor="top" open={isOpen} onClose={onClose}>
        <div className="p-4">
          <TextField
            placeholder="Search..."
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <iconify-icon
                    icon="material-symbols:search"
                    width="28"
                  ></iconify-icon>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Drawer>
    </div>
  );
}

export default TopSider;
