package lists;

public class Converters {
    public static void tryAsDouble(String doubleLike) {
        Double asDouble = null;

        try {
            asDouble = Double.parseDouble(doubleLike);
        } catch (NumberFormatException e) { }

        if (asDouble != null) {
            System.out.println(String.format("It's a double: %0$d", (int)Math.floor(asDouble)));
        }
    }

    public static void tryAsInt(String firstIntLike, String secondIntLike) {
        Integer firstInt = null;
        Integer secondInt = null;

        try {
            firstInt = Integer.parseInt(firstIntLike);
            secondInt = Integer.parseInt(secondIntLike);
        } catch (NumberFormatException e) { }

        if (firstInt != null && secondInt != null) {
            System.out.println(String.format("Both are ints: %0$d %1$d", firstInt, secondInt));
        }
    }
}
