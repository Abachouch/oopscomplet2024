
export default function LocationPicker({ open, close }: { open: boolean, close: () => void }) {

    return (
        <dialog id="locationPicker" className="location-picker" open={open}>
            <div className="location-picker-body">
                <button onClick={() => {
                    close()
                }}
                    id="closeLocationPicker" className="location-picker-close">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <mask id="mask0_291_2707" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                            height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_291_2707)">
                            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#121212" />
                        </g>
                    </svg>
                </button>
                <button id="confirmLocationPicker" className="cta location-picker-confirm">Confirm location</button>
            </div>
        </dialog>
    )
}