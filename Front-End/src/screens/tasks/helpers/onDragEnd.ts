{/* the default */}

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const onDragEnd = (result: any, columns: any, setColumns: any) => {
// 	if (!result.destination) return;

// 	const { source, destination } = result;

// 	if (source.droppableId !== destination.droppableId) {
// 		const sourceColumn = columns[source.droppableId];
// 		const destColumn = columns[destination.droppableId];
// 		const sourceItems = [...sourceColumn.items];
// 		const destItems = [...destColumn.items];
// 		const [removed] = sourceItems.splice(source.index, 1);
// 		destItems.splice(destination.index, 0, removed);
// 		setColumns({
// 			...columns,
// 			[source.droppableId]: {
// 				...sourceColumn,
// 				items: sourceItems,
// 			},
// 			[destination.droppableId]: {
// 				...destColumn,
// 				items: destItems,
// 			},
// 		});
// 	} else {
// 		const column = columns[source.droppableId];
// 		const copiedItems = [...column.items];
// 		const [removed] = copiedItems.splice(source.index, 1);
// 		copiedItems.splice(destination.index, 0, removed);
// 		setColumns({
// 			...columns,
// 			[source.droppableId]: {
// 				...column,
// 				items: copiedItems,
// 			},
// 		});
// 	}
// };

/* export const onDragEnd = async (result, columns, setColumns, updateTaskStatus) => {
	if (!result.destination) return;
  
	const { source, destination } = result;
  
	if (source.droppableId !== destination.droppableId) {
	  const sourceColumn = columns[source.droppableId];
	  const destColumn = columns[destination.droppableId];
	  const sourceItems = [...sourceColumn.items];
	  const destItems = [...destColumn.items];
	  const [removed] = sourceItems.splice(source.index, 1);
	  destItems.splice(destination.index, 0, removed);
  
	  setColumns({
		...columns,
		[source.droppableId]: {
		  ...sourceColumn,
		  items: sourceItems,
		},
		[destination.droppableId]: {
		  ...destColumn,
		  items: destItems,
		},
	  });
  
	  try {
		console.log(`Updating task status: taskId=${removed._id}, newStatus=${destination.droppableId}`);
		const response = await updateTaskStatus(removed._id, destination.droppableId);
		console.log('Task status updated successfully', response);
	  } catch (error) {
		console.error('Failed to update task status:', error);
	  }
  
	} else {
	  const column = columns[source.droppableId];
	  const copiedItems = [...column.items];
	  const [removed] = copiedItems.splice(source.index, 1);
	  copiedItems.splice(destination.index, 0, removed);
  
	  setColumns({
		...columns,
		[source.droppableId]: {
		  ...column,
		  items: copiedItems,
		},
	  });
	}
  };
   */

  export const onDragEnd = async (result, columns, setColumns, updateTaskStatus) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems,
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems,
            },
        });

        try {
            console.log(`Updating task status: taskId=${removed._id}, newStatus=${destination.droppableId}`);
            const response = await updateTaskStatus(removed._id, destination.droppableId);
            console.log('Task status updated successfully', response);
        } catch (error) {
            console.error('Failed to update task status:', error);
        }

    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);

        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems,
            },
        });
    }
};
