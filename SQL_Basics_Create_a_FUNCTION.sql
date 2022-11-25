-- For this challenge you need to create a basic Increment function which Increments on the age field of the peoples table.

-- The function should be called increment, it needs to take 1 integer and increment that number by 1.

-- You may query the people table while testing but the query must only contain the function on your final submit.
create or replace function increment (a int)
   returns int
   language plpgsql
  as
$$
begin
 return a + 1;
end
$$