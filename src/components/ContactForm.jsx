import {
	Grid,
	TextField,
	Select,
	MenuItem,
	Typography,
	InputLabel,
	FormControl,
	Box,
} from "@mui/material";
import Button from "./Button";

const ContactForm = () => {
	return (
		<>
			<Grid item xs={12} md={7} >
				<Box
					component="form"
					sx={{
						p: 2,
						borderRadius: 2,

					}}
                    className="bg-white"
				>
					<Grid container spacing={1}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Full Name"
								variant="outlined"
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Mobile No"
								variant="outlined"
								required
							/>
						</Grid>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							fullWidth
							label="Email"
							type="email"
							variant="outlined"
							required
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mt: 2 }}>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Check In Date"
								type="date"
								variant="outlined"
								InputLabelProps={{ shrink: true }}
								required
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								label="Check Out Date"
								type="date"
								variant="outlined"
								InputLabelProps={{ shrink: true }}
								required
							/>
						</Grid>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<FormControl fullWidth variant="outlined" required>
							<InputLabel id="adults-label">Adults</InputLabel>
							<Select labelId="adults-label" label="Adults">
								<MenuItem value={1}>1</MenuItem>
								<MenuItem value={2}>2</MenuItem>
								<MenuItem value={3}>3</MenuItem>
								<MenuItem value={4}>4+</MenuItem>
							</Select>
						</FormControl>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Message"
							multiline
							rows={2}
							fullWidth
							variant="outlined"
							required
						/>
					</Grid>

					<Grid item xs={4} sx={{ mt: 3 }}>
						<Button>Reserve Now</Button>
					</Grid>
				</Box>
			</Grid>
		</>
	);
};

export default ContactForm;